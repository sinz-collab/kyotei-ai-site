window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/57cd9805248ad9d8d09ac9ce4c2f47c1ec100eee/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/57cd9805248ad9d8d09ac9ce4c2f47c1ec100eee/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
