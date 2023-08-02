<?php

namespace Espo\Modules\VietnamAddress\Field;

use Espo\Modules\VietnamAddress\Field\VietnamAddress\AddressBuilder;

/**
 * An address value object. Immutable.
 *
 * @immutable
 */
class VietnamAddress
{
    private $street = null;
    private $city = null;
    private $country = null;
    private $state = null;
    private $postalCode = null;

    public function __construct(
        ?string $country = null,
        ?string $state = null,
        ?string $city = null,
        ?string $street = null,
        ?string $postalCode = null
    ) {
        $this->country = $country;
        $this->state = $state;
        $this->city = $city;
        $this->street = $street;
        $this->postalCode = $postalCode;
    }

    /**
     * Whether has a street.
     */
    public function hasStreet(): bool
    {
        return $this->street !== null;
    }

    /**
     * Whether has a city.
     */
    public function hasCity(): bool
    {
        return $this->city !== null;
    }

    /**
     * Whether has a country.
     */
    public function hasCountry(): bool
    {
        return $this->country !== null;
    }

    /**
     * Whether has a state.
     */
    public function hasState(): bool
    {
        return $this->state !== null;
    }

    /**
     * Whether has a postal code.
     */
    public function hasPostalCode(): bool
    {
        return $this->postalCode !== null;
    }

    /**
     * Get a street.
     */
    public function getStreet(): ?string
    {
        return $this->street;
    }

    /**
     * Get a city.
     */
    public function getCity(): ?string
    {
        return $this->city;
    }

    /**
     * Get a country.
     */
    public function getCountry(): ?string
    {
        return $this->country;
    }

    /**
     * Get a state.
     */
    public function getState(): ?string
    {
        return $this->state;
    }

    /**
     * Get a postal code.
     */
    public function getPostalCode(): ?string
    {
        return $this->postalCode;
    }

    /**
     * Clone with a street.
     */
    public function withStreet(?string $street): self
    {
        $newAddress = self::createBuilder()
            ->clone($this)
            ->setStreet($street)
            ->build();

        return $newAddress;
    }

    /**
     * Clone with a city.
     */
    public function withCity(?string $city): self
    {
        $newAddress = self::createBuilder()
            ->clone($this)
            ->setCity($city)
            ->build();

        return $newAddress;
    }

    /**
     * Clone with a country.
     */
    public function withCountry(?string $country): self
    {
        $newAddress = self::createBuilder()
            ->clone($this)
            ->setCountry($country)
            ->build();

        return $newAddress;
    }

    /**
     * Clone with a state.
     */
    public function withState(?string $state): self
    {
        $newAddress = self::createBuilder()
            ->clone($this)
            ->setState($state)
            ->build();

        return $newAddress;
    }

    /**
     * Clone with a postal code.
     */
    public function withPostalCode(?string $postalCode): self
    {
        $newAddress = self::createBuilder()
            ->clone($this)
            ->setPostalCode($postalCode)
            ->build();

        return $newAddress;
    }

    /**
     * Create an empty address.
     */
    public static function create(): self
    {
        return new self();
    }

    /**
     * Create a builder.
     */
    public static function createBuilder(): AddressBuilder
    {
        return new AddressBuilder();
    }
}
