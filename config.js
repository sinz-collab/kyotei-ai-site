window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b079ea548e28c72a55ebac807fc775fae08158a0/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b079ea548e28c72a55ebac807fc775fae08158a0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
