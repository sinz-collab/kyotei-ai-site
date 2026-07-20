window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c4fd2fc4d3378979c63e25dbba3a17210d6ae3fc/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c4fd2fc4d3378979c63e25dbba3a17210d6ae3fc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
