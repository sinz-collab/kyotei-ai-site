window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1620de3577ec5d3f389cec2b49f400e3a31a2624/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1620de3577ec5d3f389cec2b49f400e3a31a2624/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
