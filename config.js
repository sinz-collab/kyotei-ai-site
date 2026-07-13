window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fdd02bfd117dbd70cdcfa1859bba3c8bbd8c3ab2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fdd02bfd117dbd70cdcfa1859bba3c8bbd8c3ab2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
