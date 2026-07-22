window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c2d54a66518cdc0a0eddd854c4dc05fa430552b3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c2d54a66518cdc0a0eddd854c4dc05fa430552b3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
