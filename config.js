window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3cc8d73189842aa90f763674a3c675268bdbc341/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3cc8d73189842aa90f763674a3c675268bdbc341/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
