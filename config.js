window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/98c5be5c0b79f8b3955a74bcf64b9690a75b05fa/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/98c5be5c0b79f8b3955a74bcf64b9690a75b05fa/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
