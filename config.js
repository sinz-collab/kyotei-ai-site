window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/194f81b5797e284d75f3ccf1a5467381f0de8aee/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/194f81b5797e284d75f3ccf1a5467381f0de8aee/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
