import { useEffect } from "react";
import { useAppDispatch } from "../app/store/hooks";
import { api } from "../services/api";

import {
  fetchCasesStart,
  fetchCasesSuccess,
  fetchCasesError,
} from "../app/features/cases/casesSlice"

import {
  fetchFiltersStart,
  fetchFiltersSuccess,
  fetchFiltersError,
} from "../app/features/filters/filtersSlice"

import {
  fetchClientsStart,
  fetchClientsSuccess,
  fetchClientsError,
} from "../app/features/clients/clientsSlice";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FeaturedCases } from "../components/FeaturedCases";
import { FilterBar } from "../components/FilterBar";
import { CaseSection } from "../components/CaseSection";
import { Clients } from "../components/Clients";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <FeaturedCases />
      <FilterBar />
      <CaseSection />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};
