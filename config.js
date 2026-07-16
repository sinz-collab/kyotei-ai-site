window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f90862301b1b8c0a9a1f8e78860bbdb9bbbe3354/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f90862301b1b8c0a9a1f8e78860bbdb9bbbe3354/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
