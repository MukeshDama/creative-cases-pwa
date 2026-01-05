import { useEffect, lazy, Suspense } from "react";
import { useAppDispatch } from "../app/store/hooks";
import { api } from "../services/api";

// Redux actions (simple reducers approach)
import {
  fetchCasesStart,
  fetchCasesSuccess,
  fetchCasesError } from "../app/features/cases/casesSlice";

import {
  fetchFiltersStart,
  fetchFiltersSuccess,
  fetchFiltersError,
} from "../app/features/filters/filtersSlice";

import {
  fetchClientsStart,
  fetchClientsSuccess,
  fetchClientsError,
} from "../app/features/clients/clientsSlice";

// Non-lazy (above the fold)
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FilterBar } from "../components/FilterBar";

// Lazy-loaded sections (performance)
const FeaturedCases = lazy(() => import("../components/FeaturedCases"));
const CaseSection = lazy(() => import("../components/CaseSection"));
const Clients = lazy(() => import("../components/Clients"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

export const CasesPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadData = async () => {
      try {
        dispatch(fetchCasesStart());
        dispatch(fetchFiltersStart());
        dispatch(fetchClientsStart());

        const [cases, filters, clients] = await Promise.all([
          api.getCases(),
          api.getFilters(),
          api.getClients(),
        ]);

        dispatch(fetchCasesSuccess(cases));
        dispatch(fetchFiltersSuccess(filters));
        dispatch(fetchClientsSuccess(clients));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        dispatch(fetchCasesError("Failed to load cases"));
        dispatch(fetchFiltersError());
        dispatch(fetchClientsError());
      }
    };

    loadData();
  }, [dispatch]);

  return (
    <main id="main-content">
    <div className="min-h-screen flex flex-col">
      {/* Header & Hero (always visible, not lazy) */}
      <Header />
      <Hero />

      {/* Lazy-loaded content */}
      <Suspense
        fallback={
          <div className="px-6 py-10 text-gray-500">
            Loading content…
          </div>
        }
      >
        <FeaturedCases />
        <FilterBar />
        <CaseSection />
        <Clients />
        <Contact />
        <Footer />
      </Suspense>
    </div>
    </main>
  );
};
