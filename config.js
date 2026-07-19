window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7b1b1cd61a85656ec06473fb598a9ccbacbdd12e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7b1b1cd61a85656ec06473fb598a9ccbacbdd12e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
