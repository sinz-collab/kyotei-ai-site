window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2eae3d896be575cb0ea57fe8b83431ef1c6bb277/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2eae3d896be575cb0ea57fe8b83431ef1c6bb277/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
