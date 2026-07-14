window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/adba208b3ab8387e3b00a1ab0b2a8652e11335b1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/adba208b3ab8387e3b00a1ab0b2a8652e11335b1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
