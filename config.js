window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/aa87e6255475cac236a1ed82e52393953c2e5c12/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/aa87e6255475cac236a1ed82e52393953c2e5c12/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
