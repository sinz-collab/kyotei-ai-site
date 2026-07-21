window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a65b9ca1d4779c7fbfbc1d59a5bbc1d3d85c5e3e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a65b9ca1d4779c7fbfbc1d59a5bbc1d3d85c5e3e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
