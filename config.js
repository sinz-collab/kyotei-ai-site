window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b8e2a9744bd4539429723c8023928b72e3880111/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b8e2a9744bd4539429723c8023928b72e3880111/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
