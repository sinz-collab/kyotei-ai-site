window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/725233e09f245fd57c7b03ed2462f14d468ed6f0/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/725233e09f245fd57c7b03ed2462f14d468ed6f0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
