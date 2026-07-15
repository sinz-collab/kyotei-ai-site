window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cacc2786e1bd85f5ee4033b57158d9c5c3fd6be3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cacc2786e1bd85f5ee4033b57158d9c5c3fd6be3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
