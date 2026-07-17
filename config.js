window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4a19ec1be5bdc937bfd9f64b6d08e9771f830dc7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4a19ec1be5bdc937bfd9f64b6d08e9771f830dc7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
