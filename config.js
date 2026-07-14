window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f4e5217c2ae0d7a61e355edf911f600d853d9064/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f4e5217c2ae0d7a61e355edf911f600d853d9064/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
