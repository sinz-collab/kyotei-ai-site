window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/604ab6cb72d77385258e8e299016e6e0d44934ec/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/604ab6cb72d77385258e8e299016e6e0d44934ec/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
