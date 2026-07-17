window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8ee7f2281d7eef8383c3e92a2736e9fc35a4282e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8ee7f2281d7eef8383c3e92a2736e9fc35a4282e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
