window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/27a3bab476581bc7b6e286c85f48a1daa0b74f88/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/27a3bab476581bc7b6e286c85f48a1daa0b74f88/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
