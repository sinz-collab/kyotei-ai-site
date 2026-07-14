window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e6779ad6c959a397ef1d9a1fd7e2aa87121e2ee0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e6779ad6c959a397ef1d9a1fd7e2aa87121e2ee0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
