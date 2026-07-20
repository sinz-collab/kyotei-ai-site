window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e334ae8a1bc3e7189ffaa0ce3c0e050b9480502/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e334ae8a1bc3e7189ffaa0ce3c0e050b9480502/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
