	/* 
		Table 'Worktable'. logical reads 3832828
		Table 'WORK_API_PZN'. logical reads 3977143
		CPU time = 287828 ms,  elapsed time = 289649 ms.
	*/
	UPDATE [dwh].[WORK_API_PZN]
	SET api_list = dwh.fn_api_list(pzn);
vs
	/*
		Table '#api_list'. logical reads 1304320
		Table 'WORK_API_PZN'. logical reads 3452
		CPU time = 104766 ms,  elapsed time = 106040 ms.
	*/
	SELECT pzn, dwh.fn_api_list(pzn) api_list 
	INTO #api_list 
	FROM [dwh].[WORK_API_PZN];

	/*
		Table '#api_list'. logical reads 6379
		Table 'WORK_API_PZN'. logical reads 3977213
		CPU time = 6906 ms,  elapsed time = 3379 ms.
	*/
	UPDATE y
	SET api_list = x.api_list
	FROM #api_list x
	JOIN [dwh].[WORK_API_PZN] y ON x.pzn = y.pzn;

	DROP TABLE #api_list