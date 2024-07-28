import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import axios from "axios";
import { Loader } from "../components";
import { addProperty } from "../store/propertySlice";
import { useDispatch } from "react-redux";

const PropertyListings = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  const isPropertiesRoute = location.pathname === "/properties";

  const [visibleProperties, setVisibleProperties] = useState(6);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [fetching, setFetching] = useState(true);

  const loadMoreProperties = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProperties((prevCou
