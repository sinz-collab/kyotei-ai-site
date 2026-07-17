window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c34adb78aae1b2919b155ab366b1e9815e6757bd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c34adb78aae1b2919b155ab366b1e9815e6757bd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
