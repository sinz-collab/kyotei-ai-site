(function () {
  "use strict";

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (char) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char];
    });
  }

  function racers() {
    try {
      var current = typeof window.race === "function" ? window.race() : null;
      return Array.isArray(current && current.racers) ? current.racers : [];
    } catch (error) {
      console.warn("racer label lookup failed", error);
      return [];
    }
  }

  function decorate() {
    var pane = document.getElementById("pane");
    if (!pane) return;

    var byLane = {};
    racers().forEach(function (racer) {
      byLane[String(Number(racer.lane))] = racer;
    });

    pane.querySelectorAll("table").forEach(function (table) {
      var firstHeader = table.querySelector("th");
      if (!firstHeader || firstHeader.textContent.trim() !== "枠") return;

      table.querySelectorAll("tr").forEach(function (row) {
        var cell = row.querySelector("td:first-child");
        if (!cell || cell.querySelector(".racer-lane-meta")) return;

        var laneElement = cell.querySelector(".lane");
        if (!laneElement) return;

        var racer = byLane[String(Number(laneElement.textContent.trim()))];
        if (!racer) return;

        var name = racer.name || "-";
        var rank = String(racer.class || "").toUpperCase();
        var rankClass = rank.startsWith("A") ? " a" : "";

        cell.classList.add("racer-lane-cell");
        cell.insertAdjacentHTML(
          "beforeend",
          '<div class="racer-lane-meta">' +
            '<span class="racer-lane-name" title="' + esc(name) + '">' + esc(name) + '</span>' +
            '<span class="racer-lane-grade' + rankClass + '">' + esc(rank || "-") + '</span>' +
          '</div>'
        );
      });
    });
  }

  function install() {
    var pane = document.getElementById("pane");
    if (!pane) {
      setTimeout(install, 50);
      return;
    }

    decorate();
    new MutationObserver(decorate).observe(pane, {childList:true, subtree:true});
    window.addEventListener("hashchange", function () { setTimeout(decorate, 0); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", install);
  } else {
    install();
  }
})();
