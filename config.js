window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7a74220b196faa804e80a4b0ccf02672031bd511/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7a74220b196faa804e80a4b0ccf02672031bd511/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
