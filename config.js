window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7a4e27959602f47aa5841ae1731b1193937c42c3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7a4e27959602f47aa5841ae1731b1193937c42c3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
