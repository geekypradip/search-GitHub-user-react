import styles from'./git.module.css'

function User({dataArray}) {
    return ( 
      <div className={styles.allCard}>
      {
        dataArray.map(user=>
        <div key={user.id} className={styles.userCard}>
          <div className={styles.userPhotoAndName}>
            <div className={styles.userName}>
          {user.login}
          </div>
          <div className={styles.avatarHolder}>
           <img src={user.avatar_url} alt="" />
          </div>
          </div>
         
            
       </div>
        
        )
      }
      
      </div>
     );
}

export default User;