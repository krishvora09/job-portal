package dev.krishvora09.backend.repo;

import dev.krishvora09.backend.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepo extends JpaRepository<JobPost, Integer> {

    @Query("SELECT DISTINCT j FROM JobPost j JOIN j.postTechStack s WHERE " +
            "LOWER(j.postProfile) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(j.postDesc) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(s) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<JobPost> search(@Param("keyword") String keyword);
}
