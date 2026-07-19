window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c19054736cb3f9a0d0bf2d0001bc52f09f1020a6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c19054736cb3f9a0d0bf2d0001bc52f09f1020a6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
