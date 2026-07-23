window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/46a74ac48b9a3e6a26db6f58230621e4db88f3b3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/46a74ac48b9a3e6a26db6f58230621e4db88f3b3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
