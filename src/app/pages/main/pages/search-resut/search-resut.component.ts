import { CategoriesComponent } from "@/components/categories/categories.component";
import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IMovie } from "src/app/interface/movie.interface";
import { SearchService } from "src/app/services/search.service";
import { movies } from "src/app/constants/movies"; // Assuming this is an array of movies

@Component({
  selector: "app-search-resut",
  templateUrl: "./search-resut.component.html",
  styleUrls: ["./search-resut.component.scss"],
  imports: [CommonModule, CategoriesComponent],
  standalone: true,
})
export class SearchResutComponent implements OnInit {
  searchService = inject(SearchService);
  private route = inject(ActivatedRoute);

  searchValue: string = "";
  searchResults: IMovie[] = [];
  explorationMovies: IMovie[] = [];
  movies: IMovie[] = [...movies];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchValue = params["search"] || "";
      this.updateSearchResults();
      // this.updateExplorationMovies();
    });

    this.explorationMovies = movies;
  }

  // TODO: Update search results based on search value
  updateSearchResults(): void {
    const sValue = this.searchValue.toLowerCase();
    this.searchResults = this.movies.filter(
      (movie) =>
        (movie.title && movie.title.toLowerCase().includes(sValue)) ||
        (movie.cnTitle && movie.cnTitle.toLowerCase().includes(sValue)) ||
        (movie.genres &&
          movie.genres.some((genre) => genre.toLowerCase().includes(sValue)))
    );
  }

  // TODO: Update exploration movies based on genres and category
  updateExplorationMovies(): void {
    // Extract all unique genres from search results
    const genres = this.searchResults.flatMap((movie) => movie.genres || []);

    // Create a set of unique categories from search results
    const categories = new Set<string>(
      this.searchResults.map((movie) => movie.category).filter(Boolean)
    );

    // Filter movies based on whether they match any genre or belong to one of the categories
    this.explorationMovies = this.movies.filter(
      (movie) =>
        (movie.genres &&
          movie.genres.some((genre) => genres.includes(genre))) ||
        categories.has(movie.category || "")
    );
  }
}
