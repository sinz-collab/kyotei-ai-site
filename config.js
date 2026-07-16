window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/666fc8d0368f68802fc2d080a0c2f83e02cdbfd2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/666fc8d0368f68802fc2d080a0c2f83e02cdbfd2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
