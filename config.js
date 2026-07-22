window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/35103c54c05da85bb0b4b52d94c635990f4046a3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/35103c54c05da85bb0b4b52d94c635990f4046a3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
