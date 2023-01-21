import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

function AppRouter() {
    const renderWithWrapper = useCallback(({ path, authOnly, element }: AppRoutesProps) => (
        <Route
            key={path}
            path={path}
            element={authOnly
                ? <RequireAuth><div className="page-wrapper">{element}</div></RequireAuth>
                : <div className="page-wrapper">{element}</div>}
        />
    ), []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
}

export default memo(AppRouter);
