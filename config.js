window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e8cc619d76d7d623114166c287d52303bdcca1a0/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e8cc619d76d7d623114166c287d52303bdcca1a0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
