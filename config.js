window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4988a785d4137e27c11363b7ce89c0960c9c2abd/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4988a785d4137e27c11363b7ce89c0960c9c2abd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
