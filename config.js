window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0c2bc588f52f70df486da76257e1dd4d4e65d870/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0c2bc588f52f70df486da76257e1dd4d4e65d870/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
