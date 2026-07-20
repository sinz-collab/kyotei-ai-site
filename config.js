window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5ae68f89a5bd897b5c3c9a9210770e0eab91eadd/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5ae68f89a5bd897b5c3c9a9210770e0eab91eadd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
