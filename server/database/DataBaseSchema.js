exports.UserInfo = (con) => {
  const userQueary = `CREATE TABLE IF NOT EXISTS
  UserInfo (
         user_id INT AUTO_INCREMENT PRIMARY KEY,
          Email VARCHAR(50),
          Pass VARCHAR(100),
          Name VARCHAR(50),
          Age VARCHAR(20),
          myGendar VARCHAR(20),
          wantGendar VARCHAR(20),
          ageRange VARCHAR(20),
          DateOfBarth DATE,
          Profile VARCHAR(100),
          Bio VARCHAR(700),
          AboutPartner VARCHAR(800),
          Intarast JSON,
          Varified BOOLEAN,
          Online BOOLEAN,
          Coverphoto VARCHAR(100),
          PrivatePhoto JSON,
          PublicePhoto JSON,
          AboutMe JSON,
          Primumuser BOOLEAN,
          accountstatus BOOLEAN,
          Location VARCHAR(50),
          create_at TIMESTAMP

              )`;
  con.query(userQueary, (err) => {
    if (err) console.log(err);
    const multiquery = `CREATE TABLE IF NOT EXISTS MultiMedia (
      media_id INT AUTO_INCREMENT PRIMARY KEY,
      status VARCHAR(20),
      photo VARCHAR(100),
      video VARCHAR(80),
      discription VARCHAR(80),
     user_id INT,
      FOREIGN KEY (user_id) REFERENCES userData(user_id) ON DELETE CASCADE,
      create_at TIMESTAMP )`;
    con.query(multiquery, (err) => {
      if (err) console.log(err);
      const conversationquery = `CREATE TABLE IF NOT EXISTS conversation (
            con_id INT AUTO_INCREMENT PRIMARY KEY,
            CreatorID INT,
            FOREIGN KEY (CreatorID) REFERENCES  userData(user_id) ON DELETE CASCADE,
            PaticipatorID INT ,
            FOREIGN KEY (PaticipatorID) REFERENCES  userData(user_id) ON DELETE CASCADE,
            create_at TIMESTAMP
            )`;
      con.query(conversationquery, (err) => {
        if (err) console.log(err);
        const messagequery = `CREATE TABLE IF NOT EXISTS Message(
              msgID INT AUTO_INCREMENT PRIMARY KEY,
              conversationID INT,
          FOREIGN KEY (conversationID) REFERENCES  conversation(con_id) ON DELETE CASCADE,
              SenderID INT,
          FOREIGN KEY (SenderID) REFERENCES  userData(user_id) ON DELETE CASCADE,
          ResiverID INT,
          FOREIGN KEY (ResiverID) REFERENCES  userData(user_id) ON DELETE CASCADE,
          Text VARCHAR(200),
          photo VARCHAR(100),
          video VARCHAR(100),
          audio VARCHAR(100),
          create_at TIMESTAMP
              ) `;
        con.query(messagequery, (err) => {
          if (err) console.log(err);
        });
      });
    });
  });
};
