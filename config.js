window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ef270692d45a74ce2a39dcd7d4e364bec06513f0/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ef270692d45a74ce2a39dcd7d4e364bec06513f0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
