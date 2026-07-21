window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cffc5dc738a4dc55eab282cc8f55396d23523a26/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cffc5dc738a4dc55eab282cc8f55396d23523a26/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
