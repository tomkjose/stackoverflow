import React, { useEffect, useState } from "react";
import { fetchQuestions } from "../../api/index";
import styles from "./QuestionCards.module.css";
import Loading from "../Loading/Loading";
function QuestionCard() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchQuestions();
        setPosts(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);
  console.log("posts", posts);
  return (
    <div className={styles.question}>
      <h2 className={styles.heading}>Questions</h2>
      <div className={styles.question_tabs}>
        <span className={`${styles.question_tab} ${styles.question_activetab}`}>
          intresting
        </span>
        <span className={styles.question_tab}>
          featured <span className={styles.question_count}>432</span>
        </span>
        <span className={styles.question_tab}>hot </span>
        <span className={styles.question_tab}>week </span>
        <span className={styles.question_tab}>month </span>
      </div>
      <hr />
      <div className={styles.posts}>
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <div className={styles.post_container} key={post.post_id}>
                <div>
                  <h2 className={styles.post_title}>{post.title}</h2>
                  <p className={styles.post_owner}>
                    <i
                      className="fa-regular fa-file"
                      style={{
                        color: "orange",
                        border: "1px solid #a3a3a3",
                        borderRadius: "100%",
                        padding: "0.5rem",
                      }}
                    ></i>{" "}
                    created by{" "}
                    <span className={styles.post_owner_name}>
                      {post?.owner?.display_name}
                    </span>
                  </p>
                </div>
                <div className={styles.post_activities}>
                  <div className={styles.post_votes}>
                    <div>{post.up_vote_count}</div>
                    <div>votes</div>
                    <div>
                      <i className="fa-regular fa-thumbs-up"></i>
                    </div>
                  </div>
                  <div className={styles.post_answers}>
                    <div>{post.comment_count}</div>
                    <div>answers</div>
                    <div>
                      <i
                        className="fa-regular fa-comment"
                        style={{ color: "" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.question_Loading}>
            {" "}
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;
