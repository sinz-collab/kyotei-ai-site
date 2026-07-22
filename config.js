window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7e505ae930317390f537dfddb617b8a9b2f698a7/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7e505ae930317390f537dfddb617b8a9b2f698a7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
