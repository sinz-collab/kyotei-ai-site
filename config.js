window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4eb96b39aa710390df921b2b403fb9e2d01bf28e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4eb96b39aa710390df921b2b403fb9e2d01bf28e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
