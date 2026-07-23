window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/838dc74f8abac99c9660308b20c397032f1c2fe4/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/838dc74f8abac99c9660308b20c397032f1c2fe4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
