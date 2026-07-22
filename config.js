window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/82a1d8b1a3f1c45a801bfd169ea2458e145d2a99/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/82a1d8b1a3f1c45a801bfd169ea2458e145d2a99/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
